import { Box, Button } from "@radix-ui/themes";

export default function Header() {
  return (
    <Box width="100vw" className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white dark:text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">Example School District</h1>
        <div className="flex justify-between items-center gap-6">
          <p>Home</p>
          <p>About</p>
          <Button variant="classic">Student Login</Button>
        </div>
      </div>
    </Box>
  )
}