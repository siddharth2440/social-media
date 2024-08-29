"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export const switchFollow = async (userId:string) => {    
    const { userId:currUserId } = auth();
    console.log("osughhsssssssssssssssssssssssssssssssssssssssiiiiiiiiiiiiiiiiiiiwuefsjdnfkdjsg");
    
    if(!currUserId){
        throw new Error("User is not authenticated");
    }
    try {
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currUserId,
                followingId: userId
            }
        })
        if(existingFollow){
            await prisma.follower.delete({
                where: {
                    id:existingFollow.id
                }
            })
        }else{
            const existingFollowRequest = await prisma.followRequest.findFirst({
                where:{
                    senderId: currUserId,
                    receiverId: userId
                }
            })
            if(existingFollowRequest){
                await prisma.followRequest.delete({
                    where: {
                        id: existingFollowRequest.id
                    }
                })
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId: currUserId,
                        receiverId: userId
                    }
                })
            }
        }

    } catch (error) {
        console.log(error);
        throw new Error("Error switching follow");     // We can also return response like this instead of using   ****** NextResponse.json(data) ******        
    }
}


export const switchBlock = async (userId:string) => {
    const {userId:curUserID} = auth();

    try {
        const is_user_blocked = await prisma.block.findFirst({
            where: {
                blockerId: curUserID ?? "",
                blockedId: userId?.toString()
            }
        })
        if(!is_user_blocked){
            await prisma.block.create({
                data: {
                    blockerId: curUserID ?? "",
                    blockedId: userId?.toString() ?? '',
                },
            })
        }
        await prisma.block.delete({
            where:{
                id:is_user_blocked?.id
            }
        })

    } catch (error) {
        console.log(error);
        
    }
}


export const accept_follow_request = async (userId:string) => {
    const {userId:curUserID} = auth();
    if(!curUserID){
        throw new Error("User is not authenticated");
    }
    try {
        const existing_follow_reuest = await prisma.followRequest.findFirst({
            where:{
                senderId: userId,
                receiverId: curUserID
            }
        })
        if(existing_follow_reuest){
            await prisma.followRequest.delete({
                where:{
                    id: existing_follow_reuest.id
                }
            })
        }
    
        await prisma.follower.create({
            data:{
                followerId: userId,
                followingId: curUserID
            }
        })
    } catch (error) {
        console.log(error);
        throw new Error(JSON.stringify(error));
    }
}

export const decline_follow_request = async (userId:string) => {
    const {userId:curUserID} = auth();
    if(!curUserID){
        throw new Error("User is not authenticated");
    }
    try {
        const existing_follow_reuest = await prisma.followRequest.findFirst({
            where:{
                senderId: userId,
                receiverId: curUserID
            }
        })
        if(existing_follow_reuest){
            await prisma.followRequest.delete({
                where:{
                    id: existing_follow_reuest.id
                }
            })
        }
    } catch (error) {
        console.log(error);
        throw new Error(JSON.stringify(error));
    }
}

export const update_user_profile = async (prevState:{error:boolean; success:boolean},payload:{formdata:FormData,cover:string}) => {
    
    const {userId}  = auth()

    if(!userId){
    return {error:false,success:true}
    }
    
    const {formdata,cover} = payload;
    // console.log("Cover :-  "+cover);

    const get_all_details = Object.fromEntries(formdata);
    const filtered_fields = Object.fromEntries(
        Object.entries(get_all_details).filter(([_, value]) => value != "")
    )
    // console.log(filtered_fields);
    
    const profile = z.object({
        name: z.string().min(3).optional(),
        surname: z.string().min(3).optional(),
        dscription: z.string().min(5).max(60).optional(),
        city: z.string().min(5).optional(),
        school: z.string().min(5).optional(),
        work: z.string().optional(),
        website: z.string().min(5).optional(),
        cover:z.string().min(5).optional()
    })
    const validated_fields = profile.safeParse({cover,...filtered_fields})
    console.log(validated_fields);
    
    if(!validated_fields.success){
        return {error:false,success:true}
    }

    try {
        console.log("Updating the user profile");
        
        await prisma.user.update({
            where:{
                id:userId ?? ""
            },
            data:validated_fields.data ?? ""
        })
    } catch (error) {
        console.log("Error in updating the user");
        
        
        return {error:false,success:true}
    }
    // console.log("User updated successfully");
    revalidatePath(`/`)
    return {error:false,success:true}
}

export const switchLike = async (postId:number) => {
    const {userId} = auth();
    if(!userId) throw new Error("User not found");

    // console.log("POO" + postId);
    const all_likes = await prisma.like.findMany({});
    // console.log(all_likes);
    
    try {
        const isLiked = await prisma.like.findFirst({
            where:{
                userId,postId
            }
        })
        if(isLiked){
            // console.log(isLiked);
            console.log("Log is goinf"+isLiked.id);
            
            await prisma.like.delete({
                where:{
                    id: isLiked.id
                }
            })

            return {success:true,message:"Post deleted Successully"}
        }
        await prisma.like.create({
            data:{
                userId,
                postId
            }
        })
        // console.log("Saved to the databse");
        return {success:true,msg:"liked Successfully"}
    } catch (error) {
        return {success:true,message:"Post deleted Successully"}
    }
}

export const addComment = async (prevState:{success:boolean,error:boolean},payload:{desc:string,postId:number}) =>{
    const { userId } = auth();
    const { desc,postId } = payload;
    try {
        await prisma.comment.create({
            data:{
                postId,desc,userId:userId ?? ""
            }
        })
    } catch (error) {
        return {success:false,error:true}
    }
    return {success:true,error:false}
}



export const addNewPost = async (formData:FormData,img:string) => {
    const {userId} = auth();
    if(!userId) throw new Error("User not found");

    const {desc} = Object.fromEntries(formData);
    const DESC = z.object({
        desc: z.string().min(4).max(200).optional()
    })

    const validate_fields = DESC.safeParse({desc,img,userId});
    if(!validate_fields) return {success: false}
    console.log(validate_fields);
    
    await prisma.post.create({
        data:{
            userId,
            desc:validate_fields.data?.desc || "",
            img
        }
    })
    revalidatePath("/");
    return {success:true}
}