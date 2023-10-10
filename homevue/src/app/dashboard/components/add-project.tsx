"use client"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select"
import { Plus } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import axios from 'axios';

interface AddProjectProps {
	userId: string
}

export const AddProject = ({ userId }: AddProjectProps) => {

	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')

	const addProject = async () => {

		try {
			const response = await axios.post(
				"https://spherical-sigma.vercel.app/dashboard/project",
				{
					name,
					description: desc,
					ownerId: userId,
				}
			)
			console.log(response.data)
		} catch (e) {
			console.warn(e)
		}

	}

	return (
		<div className="absolute -bottom-10 right-8">
			<Dialog>
				<DialogTrigger>
					<button className=" bg-blue-900 text-4xl p-4 rounded-full">
						<Plus className=" text-4xl" />
					</button>
				</DialogTrigger>
				<DialogContent>
					<CardHeader>
						<CardTitle>Create project</CardTitle>
						<CardDescription>Create your new project in one-click.</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="name">Name</Label>
									<Input
										value={name}
										onChange={e => setName(e.target.value)}
										id="name" placeholder="Name of your project" />
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="description">Description</Label>
									<Textarea
										value={desc}
										onChange={e => setDesc(e.target.value)}
										id="description"
										placeholder="Description of your project" />

								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex justify-end space-x-4 ">
						<Button variant="outline">Cancel</Button>
						<Button onClick={addProject}>Create</Button>
					</CardFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}