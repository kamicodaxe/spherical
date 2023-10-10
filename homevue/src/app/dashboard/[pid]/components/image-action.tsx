"use client"
import { MoreVertical } from "lucide-react";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



interface ImageActionProps { }

export const ImageAction: React.FC<ImageActionProps> = () => {
	const onPress = () => {
		alert("Pressed!")
	}
	return (
		<div className="absolute right-4 top-2" >
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="rounded-full text-white bg-[rgba(0,0,0,0.5)] hover:bg-gray-200 hover:text-sky-400 z-10" >
						<MoreVertical className="" />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Pano actions</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={onPress}>Open</DropdownMenuItem>
					<DropdownMenuItem onClick={onPress}>Edit</DropdownMenuItem>
					<DropdownMenuItem onClick={onPress}>Replace</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}