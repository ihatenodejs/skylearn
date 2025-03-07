import { Section, Button } from '@radix-ui/themes'
import { FaAppleWhole } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <Section>
      <Image src="/generic.png" alt="School" width={150} height={150} />
      <h1 className="text-4xl font-extrabold pb-4">Example School District</h1>
      <p className="mb-6">This would have some text, I dunno.</p>
      <Link href="/about">
        <Button
          variant="classic"
          size="4"
        >
          <FaAppleWhole />
          Learn More
        </Button>
      </Link>
    </Section>
  )
}