import { Section, Button } from '@radix-ui/themes'
import { FaQuestionCircle, FaGraduationCap } from "react-icons/fa"
import Link from 'next/link'

export default function PoweredBy() {
  return (
    <Section className="flex justify-end text-right">
      <div className="justify-center text-center xl:justify-end xl:text-right p-4">
        <div className="flex justify-end">
          <FaGraduationCap
            size={100}
            className="pb-3 mx-auto lg:mr-0"
          />
        </div>
        <h1 className="text-4xl font-extrabold pb-4">Powered by SkyLearn</h1>
        <p className="mb-6 max-w-2xl">SkyLearn empowers our school with all the tools we need to run our own learning management system. Some more text that I can't write because I'm not good at PR.</p>
        <Link href="https://github.com/ihatenodejs/skylearn" target="_blank">
          <Button
            variant="classic"
            size="4"
          >
            <FaQuestionCircle />
            What is SkyLearn
          </Button>
        </Link>
      </div>
    </Section>
  )
}