import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return { title: `Post: ${resolvedParams.slug}` };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <h1>Slug: {resolvedParams.slug}</h1>;
}
