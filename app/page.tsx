"use client";

import { Button } from "@heroui/button";
import clsx from "clsx";
import { ArrowDownToLineIcon, BoxIcon, ChevronsDownIcon, CirclePlayIcon, CodeXmlIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
    return (
        <div className="w-11/12 mx-auto flex flex-col gap-48">
            <Hero />
            <ItWorks />
            <GameManagement />
            <Integration />
            <FileStorage />
            <Ender />
        </div>
    );
}

function Hero() {
    return <div className="w-full h-screen flex flex-col gap-12 justify-center">
        <div className="w-full flex gap-20 items-center justify-center">
            <Heading />
            <div className="relative h-32 aspect-square">
                <Image src="/logo.png" alt="Logo" fill />
            </div>
        </div>

        <HeadingLinks />

        <p className="text-default-300 mx-auto mt-4 text-center">
            创造、游玩、分享你的世界、模组、整合包。Alicorn 样样在行。<br />
            高度集成、性能出色、界面友好。让你的构想即刻变为可游玩的世界。
        </p>

        <div className="mx-auto animate-bounce">
            <ChevronsDownIcon size={32} />
        </div>
    </div>;
}

function HeadingLinks() {
    function openReleases() {
        open("https://github.com/Andy-K-Sparklight/Alicorn/releases");
    }

    function openRepo() {
        open("https://github.com/Andy-K-Sparklight/Alicorn");
    }

    return <div className="flex gap-4 mx-auto">
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
    </div>;
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
            随心设计，随意构想，Alicorn 会将你的想法变为现实。
        </p>
    </div>;
}

function ItWorks() {
    return <div className="w-full flex justify-center items-center gap-32">
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">
                一步到位，一下就好。
            </h1>

            <p className="text-default-300">
                再复杂的任务，也不过就是点几下按钮。<br />
                摆脱纷杂的技术细节，自由自在地创造世界。<br />
                Alicorn 什么都会帮你搞定。
            </p>
        </div>

        <div className="flex items-center">
            <div
                className="p-10 bg-primary-800 text-xl rounded-xl border-primary border-2 font-bold flex
                 flex-col gap-2 items-center"
            >
                <BoxIcon size={48} />
                我的新游戏
            </div>
            <div className="flex flex-col gap-1">
                <div
                    className="p-2 bg-default-700 border-default text-default-300 border-2 border-l-0
                    rounded-r-lg text-right"
                >
                    版本 1.21.4
                </div>
                <div
                    className="p-2 bg-default-700 border-default text-default-300 border-2 border-l-0
                    rounded-r-lg text-right"
                >
                    加载器 Fabric
                </div>
                <div
                    className="p-2 bg-default-700 border-default text-default-300 border-2 border-l-0
                    rounded-r-lg text-right"
                >
                    JRE 运行时 21
                </div>
            </div>
        </div>
    </div>;
}

function GameManagement() {
    const [selectIndex, setSelectIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setSelectIndex(i => i >= 2 ? 0 : i + 1);
        }, 2000);

        return () => clearInterval(t);
    }, []);


    return <div className="w-full flex justify-center items-center gap-32">
        <div className="flex flex-col gap-2">
            {
                ["空岛生存", "重型刷铁机", "红石研究"].map((t, i) =>
                    <div
                        key={i}
                        className={clsx(
                            "p-4 w-48 border-2 rounded-xl font-bold flex items-center duration-200",
                            selectIndex === i ?
                                "border-primary bg-primary-800 translate-x-2" :
                                "border-secondary bg-secondary-800"
                        )}
                    >
                        <div className="grow">
                            {t}
                        </div>
                        <CirclePlayIcon />
                    </div>
                )
            }
        </div>


        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">
                大千世界，尽在掌握。
            </h1>

            <p className="text-default-300">
                创建喜爱的游戏体验，然后随时畅玩。<br />
                好主意很多？想到什么都可以做出来！<br />
                Alicorn 能将你的玩法一一收纳。<br />
            </p>
        </div>
    </div>;
}

function Integration() {
    const images = [
        "/modrinth.svg",
        "/fabric.webp",
        "/quilt.webp",
        "/iris.webp",
        "/neoforged.webp",
        "/jei.webp"
    ];

    return <div className="w-full flex justify-center items-center gap-32">
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">
                社区内容，即刻访问。
            </h1>

            <p className="text-default-300">
                模组、数据包、各类工具，都能直接用。<br />
                寻找资源的事情，就不用亲自操心了。<br />
                Alicorn 知道去哪里找它们。
            </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {
                images.map(src =>
                    <div className="p-3 rounded-xl bg-content2 flex justify-center items-center" key={src}>
                        <Image src={src} alt="Brand Icon" width={48} height={48} />
                    </div>
                )
            }
        </div>
    </div>;
}

function FileStorage() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const t = setInterval(() => {
            setActive(a => !a);
        }, 2000);

        return () => clearInterval(t);
    }, []);

    return <div className="w-full flex justify-center items-center gap-32">

        <div className="relative p-12 border-2 border-default border-dotted rounded-xl">
            <div
                className={clsx(
                    "duration-200 absolute aspect-square h-32 rounded-xl -translate-x-4 -translate-y-4",
                    active ? "bg-primary-700 border-2 border-primary z-50" : "bg-content2"
                )}
            />
            <div
                className={clsx(
                    "duration-200 aspect-square h-32 rounded-xl translate-x-4 translate-y-4",
                    !active ? "bg-secondary-700 border-2 border-secondary z-50" : "bg-content2"
                )}
            />
        </div>

        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-5xl">
                一个时空，两种世界。
            </h1>

            <p className="text-default-300">
                保持游戏独立，却不占用额外空间，很神奇吧？<br />
                有多少构想，都随你，不必顾虑。<br />
                Alicorn 无需版本隔离也能做到。
            </p>
        </div>
    </div>;
}

function Ender() {
    return <div className="mx-auto flex flex-col gap-8">
        <h1 className="font-bold text-5xl">
            现在就出发。
        </h1>

        <p className="text-default-300">
            获取 Alicorn，即刻开始你的新冒险。
        </p>

        <HeadingLinks />
    </div>;
}
