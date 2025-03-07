import { Box, Container } from '@radix-ui/themes'
import Header from '@/components/Header'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Box>
        <Container size="4">
          <Hero />
        </Container>
      </Box>
    </div>
  );
}
