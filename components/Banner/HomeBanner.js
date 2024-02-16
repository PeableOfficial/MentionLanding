import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>
                            New! Now you can save Posts on Bookmarks
                        </BadgeMessage>
                    </BadgeGroup>
                </MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        We believe in the potential of people when they can come
                        together.
                    </PageTitle>
                </MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Connect with friends, share your thoughts, and
                            explore new possibilities in Mention. Join us today
                            and be part of a thriving community!
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button
                                href="https://mention.earth/auth/signin"
                                target="_blank"
                            >
                                Sign In
                            </Button>
                            <a
                                role="button"
                                href="https://mention.earth/auth/signup"
                                target="_blank"
                                className="btn btn--secondary"
                            >
                                Join now!
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/mention-hero-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
