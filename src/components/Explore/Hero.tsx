import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

function Hero() {
	return (
		<section>
			<Carousel className="w-full">
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="overflow-hidden">
									<div className="max-h-[420px]">
										<img
											src="https://media.istockphoto.com/id/490506050/photo/living-painting-young-woman-completely-covered-with-thick-paint.webp?b=1&s=170667a&w=0&k=20&c=oUfi7SWlTRxTAwMtH2GDgZR4P7k21fhOFvpTp_RXqto="
											alt="cover-img"
											className="w-full"
										/>
									</div>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}

export default Hero;
