import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import imgProject1 from "../public/project1.png";
import souza from "../public/souza.png";
import noiseplayer from "../public/noiseplayer.png";
import { Gallery } from "@/components/gallery";
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DotIcon } from "lucide-react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex gap-8 min-h-screen flex-col items-center p-24 mx-auto lg:max-w-[800px]">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-medium">Pedro Lucas</h1>
        <Link className={"pl-1 " + buttonVariants({ variant: "outline" })} href={'mailto:pedrolucaslcosta@gmail.com'}>
          <DotIcon className="h-8 w-8 text-emerald-500"></DotIcon>
          Connect
        </Link>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2">Hi, I&apos;m Pedro!</h2>
        <p>I&apos;m a frontend developer, designer, and business owner. Currently, I work as a full-stack developer at <Link className={"underline " + buttonVariants({ variant: "link" }) + ' !px-0 '} href={'https://site.easyschool.com.br/'}>EasySchool</Link>, where I develop and maintain solutions to optimize daily routines for schools.</p>
      </div>
      <div className="flex gap-4 w-full">
        <Button size={'icon'} variant={'outline'} asChild>
          <Link href={'https://instagram.com/pedrolucaslco'}>
            <BsInstagram></BsInstagram>
          </Link>
        </Button>
        <Button size={'icon'} variant={'outline'} asChild>
          <Link href={'https://x.com/pedrolucaslco'}>
            <BsTwitterX></BsTwitterX>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <Dialog>
          <DialogTrigger className="flex flex-col items-start gap-2">
            <Image src={souza} alt="" className="w-100 rounded-lg" width={1440} height={1080} />
            <h2 className="text-lg font-bold">Souza Vidraçaria</h2>
            <div className="flex gap-1">
              <Badge variant={'outline'}>Design</Badge>
              <Badge variant={'outline'}>Visual Identity</Badge>
              <Badge variant={'outline'}>Figma</Badge>
            </div>
          </DialogTrigger>
          <DialogContent >
            <Image src={souza} alt="" className="w-100 rounded-lg" width={1440} height={1080} />
            <ScrollArea className="h-80 rounded-md border p-4">
              <DialogHeader>
                <DialogTitle>Souza Vidraçaria</DialogTitle>
                <DialogDescription>
                  <div className="flex gap-1">
                    <Badge variant="secondary">Visual Identity</Badge>
                    <Badge variant="secondary">Small Business</Badge>
                  </div>
                  <br />
                  <p>PT-BT</p>
                  <p>
                    A Souza Vidraçaria é uma empresa comprometida em oferecer esquadrias e vidraçarias de alto padrão. Sua missão é conquistar o coração dos clientes com uma execução de serviço profissional e seus acabamentos de alta qualidade.
                  </p><br />
                  <p>EN</p>
                  <p>
                    Souza Vidraçaria is a company committed to offering high-standard frames and glassworks. Its mission is to win the hearts of customers with professional service execution and high-quality finishes.
                  </p><br />
                  <hr /><br />
                  <p>
                    <p>Designed at <Link className={"px-0 py-0" + buttonVariants({ variant: "link" })} href="https://www.instagram.com/_studiosevendesign/" target="_blank">Studio Seven</Link></p>
                    <p>Country: Brazil</p>
                    <p>Year: 2024</p>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="flex flex-col items-start gap-2">
            <Image src={noiseplayer} alt="" className="w-100 rounded-lg" width={1440} height={1080} />
            <h2 className="text-lg font-bold">NoisePlayer</h2>
            <div className="flex gap-2">
              <Badge variant={'outline'}>UX/UI Design</Badge>
              <Badge variant={'outline'}>Development</Badge>
              <Badge variant={'outline'}>React.js</Badge>
              <Badge variant={'outline'}>Tailwind CSS</Badge>
            </div>
          </DialogTrigger>
          <DialogContent >
            <Image src={noiseplayer} alt="" className="w-100 rounded-lg" width={1440} height={1080} />
            <ScrollArea className="h-80 rounded-md border p-4">
              <DialogHeader>
                <DialogTitle>NoisePlayer</DialogTitle>
                <DialogDescription>
                  <div className="flex gap-1 pt-3">
                    <Badge variant={'outline'}>UX/UI Design</Badge>
                    <Badge variant={'outline'}>Development</Badge>
                    <Badge variant={'outline'}>React.js</Badge>
                    <Badge variant={'outline'}>Tailwind CSS</Badge>
                  </div>
                  <br />
                  <p>PT-BT</p>
                  <p>
                    NoisePlayer é um gerador de ruídos de fundo online desenvolvido para te auxiliar a relaxar, ter foco e diminuir sons desagradáveis do seu ambiente.
                  </p><br />
                  <p>EN</p>
                  <p>
                    NoisePlayer is an online background noise generator designed to help you relax, focus, and tune out unpleasant sounds from your environment.
                  </p><br />
                  <hr /><br />
                  <p>
                    <p>See on <Link className={"px-0 py-0" + buttonVariants({ variant: "link" })} href="https://github.com/pedrolucaslcosta/NoisePlayer" target="_blank">GitHub</Link></p>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full"><hr /></div>
      <div>
        <Button variant={'link'} asChild>
          <Link href={'https://instagram.com/pedrolucaslco'}>
            @pedrolucaslco
          </Link>
        </Button>
      </div>
    </main >
  );
}
