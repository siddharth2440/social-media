"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";

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
        
    }
}