import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Real-Time Communication",
        content:
            "Post, Repost, Reply: Share your thoughts in tweets, amplify voices with retweets, and engage in conversations through replies. With Twitter, communication is instant and boundless.",
        align: "right",
        image: "/features1.png"
    },
    {
        id: uuid(),
        title: "Discover Trends",
        content:
            "Trending Topics: Stay informed with a real-time list of trending topics and hashtags. Whether it's breaking news, sports, entertainment, or everyday interests, you're always in the know.",
        align: "left",
        image: "/features2.png"
    },
    {
        id: uuid(),
        title: "Follow Your Interests",
        content:
            "Follow: Tailor your Mention feeds by following other users, from public figures to friends, businesses to news outlets. Your timeline becomes a personalized stream of content that matters to you.",
        align: "right",
        image: "/features3.png"
    },
    {
        id: uuid(),
        title: "Stay Connected",
        content:
            "Notifications: Never miss a beat with notifications for likes, reposts, and replies. Stay connected to your network and keep the conversation going.",
        align: "left",
        image: "/features4.png"
    },
    {
        id: uuid(),
        title: "Engage with Multimedia",
        content:
            "Photos and Videos: Enrich your tweets with photos, GIFs, and videos. Capture moments and share them instantly with your followers.",
        align: "right",
        image: "/features5.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl mw-full w-auto m-auto max-h-[40em] offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-2 lg:pr-4 xl:pr-2 ml-auto"
                                : "md:pl-2 lg:pl-4 xl:pl-2  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
