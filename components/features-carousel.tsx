import { Notes3Illustration } from "@/components/ui/illustrations/notes-3-illustration"
import { Models3Illustration } from "@/components/ui/illustrations/models-3-illustration"
import { WorkflowIllustration } from "@/components/ui/illustrations/workflow-illustration"
import { AiAutocompleteIllustration } from "@/components/ui/illustrations/ai-autocomplete-illustration"
import { TranslationInterfaceIllustration } from "@/components/ui/illustrations/translation-interface-illustration"
import { TokenCounterIllustration } from "@/components/ui/illustrations/token-counter-illustration"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'

export default function FeaturesSliderSection() {
    return (
        <section className="max-lg:px-1">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    breakpoints: {
                        '(max-width: 768px)': {
                            slidesToScroll: 1,
                        },
                        '(min-width: 768px)': {
                            slidesToScroll: 2,
                        },
                        '(min-width: 1024px)': {
                            slidesToScroll: 3,
                        },
                    },
                }}>
                <div className="mx-auto max-w-5xl px-6">
                    <div className="flex flex-wrap items-end justify-between gap-4 pb-6 lg:pb-6">
                        <h2 className="text-white max-w-md text-balance text-4xl font-semibold">Build modern AI development tools</h2>
                        <div className="flex items-center gap-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                </div>
                <div className="mask-x-from-95% md:mask-x-from-98% mx-auto max-w-5xl">
                    <CarouselContent className="mx-0 py-6 *:px-1 sm:*:basis-1/2 lg:*:basis-1/3">
                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 overflow-hidden rounded-2xl p-6 shadow-md">
                                <div className="m-auto scale-90 self-center">
                                    <Models3Illustration />
                                </div>

                                <p className="text-foreground/65 max-w-xs self-end text-balance font-medium lg:max-w-xs">
                                    <strong className="text-foreground font-medium">Multiple AI models</strong> including GPT-5, Claude, and Llama with seamless switching between providers.
                                </p>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-md">
                                <div className="mx-auto scale-90 self-center">
                                    <Notes3Illustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Collaborative documentation</strong> with version history, inline comments, and real-time editing.
                                </p>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-md">
                                <div className="mx-auto scale-90 self-center">
                                    <WorkflowIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Automated workflows</strong> with drag-and-drop pipeline builder and pre-built integrations.
                                </p>
                            </Card>
                        </CarouselItem>

                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-md">
                                <div className="mx-auto scale-90 self-center">
                                    <AiAutocompleteIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Intelligent code completion</strong> that understands your codebase and suggests context-aware snippets.
                                </p>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-md">
                                <div className="mx-auto scale-90 self-center">
                                    <TokenCounterIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Usage analytics</strong> with detailed token tracking, cost estimation, and budget alerts.
                                </p>
                            </Card>
                        </CarouselItem>
                        <CarouselItem>
                            <Card className="grid-rows-subrgid shadow-black/4 row-span-2 grid h-full gap-6 rounded-2xl p-6 shadow-md">
                                <div className="scale-90 self-center">
                                    <TranslationInterfaceIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Real-time translation</strong> across 50+ languages with natural-sounding output and dialect support.
                                </p>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </div>
            </Carousel>
        </section>
    )
}