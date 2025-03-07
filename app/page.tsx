import { Box, Container } from '@radix-ui/themes'
import Header from '@/components/Header'
import Hero from '@/components/home/Hero'
import PoweredBy from '@/components/home/PoweredBy'

export default function Home() {
  return (
    <div>
      <Header />
      <Box>
        <Container size="4">
          <Hero />
          <PoweredBy />
        </Container>
      </Box>
    </div>
  );
}
