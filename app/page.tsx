"use client";

import { Button } from "@heroui/button";
import { ArrowDownToLineIcon, CodeXmlIcon } from "lucide-react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Home() {
    function openReleases() {
        open("https://github.com/Andy-K-Sparklight/Alicorn/releases");
    }

    function openRepo() {
        open("https://github.com/Andy-K-Sparklight/Alicorn");
    }

    return (
        <div className="w-full">
            <div className="w-full h-screen flex flex-col gap-8 justify-center">
                <div className="w-full flex gap-16 items-center justify-center">
                    <Heading />
                    <div className="relative h-32 aspect-square">
                        <Image src="/logo.png" alt="Logo" fill />
                    </div>
                </div>

                <div className="flex gap-4 mx-auto">
                    <Button
                        color="primary"
                        variant="shadow"
                        startContent={<ArrowDownToLineIcon />}
                        onPress={openReleases}
                    >
                        获取 Alicorn
                    </Button>

                    <Button
                        startContent={<CodeXmlIcon />}
                        onPress={openRepo}
                    >
                        源代码
                    </Button>
                </div>

                <p className="text-default-300 mx-auto text-sm mt-4">
                    创造、游玩、分享你的世界、模组、整合包。Alicorn 样样在行。<br />
                    高度集成、性能出色、界面友好。让你的构想即刻变为可游玩的世界。
                </p>
            </div>
        </div>
    );
}


function Heading() {
    const strings = ["世界", "玩法", "模组", "纹理", "光影", "服务器"];


    return <div className="flex flex-col gap-6">
        <h1 className="font-bold text-6xl leading-tight">
            一千种
            <span className="text-primary">
                <ReactTyped
                    strings={strings}
                    typeSpeed={150}
                    backDelay={2000}
                    backSpeed={100}
                    loop
                />
            </span>
            ，<br />
            <span className="text-primary">怎样</span>都行！
        </h1>

        <p className="text-xl">
            随心设计，随意构想，让 Alicorn 把你的想法变为现实。
        </p>
    </div>;
}
