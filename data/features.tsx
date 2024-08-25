import {HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Multi-Framework Support",
        description: "Whether you're using Express, Flask, Django, Ruby on Rails, or GraphQL, Postlog seamlessly integrates with all popular API frameworks. Our platform is designed to handle diverse codebases, ensuring accurate documentation for any API.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "LLM-Powered Precision",
        description: "Postlog’s LLM-driven engine understands your code deeply, ensuring that every endpoint and parameter is captured accurately.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "Seamless Integration",
        description: "Integrate Postlog effortlessly into your project’s pipeline. With minimal setup, Postlog automatically generates and updates API documentation as your code evolves, ensuring consistency and accuracy without disrupting your workflow.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];