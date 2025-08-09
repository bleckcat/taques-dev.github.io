import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

interface FormState {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
}

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast()

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setForm((f) => ({ ...f, [id]: value }))
  }

  // Helper: build a mailto fallback
  const buildMailto = () => {
    const to = "juanvitor16@hotmail.com"
    const subject = encodeURIComponent(form.subject || "New Contact Message")
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return

    if (!form.firstName || !form.email || !form.message) {
      toast({
        title: "Missing fields",
        description: "First name, email and message are required.",
        variant: "destructive",
      })
      return
    }

    try {
      setSubmitting(true)
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdkdynyr"
      const fd = new FormData()
      fd.append("firstName", form.firstName)
      fd.append("lastName", form.lastName)
      fd.append("email", form.email)
      fd.append("subject", form.subject)
      fd.append("message", form.message)

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      })

      if (res.ok) {
        toast({
          title: "Message sent",
          description: "Thanks for reaching out!",
        })
        setForm(initialForm)
      } else {
        // Attempt to parse Formspree error JSON
        let desc = `Status ${res.status}`
        try {
          const data: { errors?: { message: string }[] } = await res.json()
          if (data?.errors?.length) {
            desc = data.errors.map((e) => e.message).join(", ")
          }
        } catch {
          /* ignore */
        }
        toast({
          title: "Send failed",
          description: desc,
          variant: "destructive",
        })
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Please try again later."
      toast({
        title: "Send failed",
        description: message,
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities, whether it's a
                freelance project, full-time position, or just a chat about
                technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-card hover:bg-card-hover transition-colors group-hover:shadow-glow-primary">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    juanvitor16@hotmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-card hover:bg-card-hover transition-colors group-hover:shadow-glow-secondary">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    I need to change my number right now, please contact me via
                    email.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-card hover:bg-card-hover transition-colors group-hover:shadow-glow-accent">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">São Paulo, Brazil</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/bleckcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-card hover:bg-card-hover hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-taques" /* update if different */
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-card hover:bg-card-hover hover:shadow-glow-secondary transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-secondary" />
                </a>
              </div>
            </div>
          </div>

          <Card className="border-border hover:shadow-glow-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={onChange}
                      required
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={onChange}
                      className="bg-background border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                    value={form.subject}
                    onChange={onChange}
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    required
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  size="lg"
                  disabled={submitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
