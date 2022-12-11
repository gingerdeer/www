import {
	CallToAction,
	CommunitySupportedNumbers,
	FeaturedBlogPosts,
	FeaturedStarters,
	Features,
	FrequentlyAskedQuestions,
	GetStarted,
	Hero,
	HowItWorks,
	LogosReferences,
	Testimonials,
} from 'components/sections'
import { getAllTags, getSortedPosts } from 'lib/blog/posts'
import { GetStaticPropsResult } from 'next'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
	const posts = getSortedPosts(3)

	return {
		props: {
			posts,
		},
	}
}

interface Props {
	readonly posts: ReturnType<typeof getSortedPosts>
}

export default function Home(props: Props) {
	return (
		<>
			<Hero />
			<GetStarted />
			<LogosReferences />
			<Features />
			<CommunitySupportedNumbers />
			<FeaturedStarters />
			<HowItWorks />
			<Testimonials />
			<CallToAction />
			<FrequentlyAskedQuestions
				questions={[
					{
						question:
							'How do you handle isolation/sandboxing, if plugins are loaded as dynamic libraries?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question: 'How does plugin reloading work? Is it using dynamic linking somehow?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question: 'Do you plan to have a WASM runner?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
					{
						question:
							'How it differs from using serverless framework with rust lambda and provided runtime?',
						answer: "A simple cargo command packages up your application, ships it to the shuttle build cluster where it's incrementally compiled and automatically served on a unique subdomain.",
					},
				]}
			/>
			<FeaturedBlogPosts posts={props.posts} />
		</>
	)
}
