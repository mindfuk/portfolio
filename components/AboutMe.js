import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        <Popover
          trigger="hover"
          placement={isLargerThan800 ? 'right' : 'bottom'}
        >
          <PopoverTrigger>
            <chakra.span
              onMouseOver={() => handleHover(`about_${text}`)}
              color="button1"
              cursor="help"
            >
              {text}
            </chakra.span>
          </PopoverTrigger>
          <PopoverContent bg="secondary" borderColor="button1" color="white">
            <PopoverArrow bg="textSecondary" />
            <PopoverBody fontSize="sm" color="textPrimary">
              {content}
            </PopoverBody>
          </PopoverContent>
        </Popover>{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Abdul Rahman, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really like to build stuff using{' '}
              <MoreInfo
                text="no-code tools"
                content="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
              />
              back in 2010, and from that, I explored how to code myself,
              fast-forward to today, I do programming in various languages and
              technologies, and had the privilege to worked as a{' '}
              <MoreInfo
                text="Software
              Engineer in a B2B Company"
                content={
                  <Image src="https://i.imgur.com/2vdHCro.png" alt="linkedin" />
                }
              />
              , I'm interested in building something awesome with code and
              automate tasks with code, currently focused in
              <MoreInfo
                text="Web Development,"
                content="Building web-apps using Javascript Frameworks (React.js and Next.js)"
              />
              <MoreInfo
                text="Open Source"
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
              />
              and
              <MoreInfo
                text="Competitive Programming"
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
              />
              <br />
              <br />
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="https://i.imgur.com/CbbuXeI.png"
                w="100%"
                maxW={{ base: '300px', lg: '350px' }}
                maxH={{ base: '300px', lg: '350px' }}
                alt="Abdul Rahman"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}