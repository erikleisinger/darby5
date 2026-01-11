import {useState} from 'react'
export default function ContactForm() {

    const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    function reset() {
      setEmail('');
      setName('');
      setMessage('');
    }

async function submit(e: Event) {
    if (loading) return;
    console.log('sending message')


setLoading(true)

const submission = {
  name,
  email,
  message
}

  const json = JSON.stringify({
    ...submission,
    access_key: import.meta.env.VITE_WEB3_KEY,
  })
//   timeout(1000)
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  })

    .then(() => {
  
      setSuccess(true)
      reset()
      window.alert('Message sent!')
    })
    .catch(e => {
    window.alert('There was an error. Please ensure all fields are filled out and valid, then try again.')
    
    })
    .finally(() => {
      setLoading(false)
    })
}

  return (
    <section
      id="contact"
      className="bg-[#f1eee7] relative w-full py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[80px]"
      data-animate
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-[40px] items-center w-full">
          {/* MOTION: Fade in section header */}
          <div className="w-full" data-animate>
            <p className="font-['Neue_Haas_Grotesk_Display_Pro:75_Bold',sans-serif] leading-tight md:leading-normal text-[#8b9544] text-[32px] md:text-[40px] lg:text-[48px] tracking-[1.2px] md:tracking-[1.92px] uppercase">
              Contact
            </p>
          </div>

          {/* Contact Form */}
          {/* MOTION: Fade in contact form */}
          <div
            className="flex flex-col gap-4 md:gap-6 items-start p-4 md:p-6 relative rounded-[8px] w-full max-w-4xl border border-[#ccc]"
            data-animate
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#333] text-[14px] md:text-[16px] tracking-[0.64px]">
                Name
              </p>
              <div className="bg-[#fefefe] relative rounded-[8px] w-full border border-[#ccc]">
                <div className="flex items-center px-3 md:px-[16px] py-2 md:py-[12px]">
                  <input
                    type="text"
                    placeholder="Jon Doe"
                    className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#818380] text-[14px] md:text-[16px] tracking-[0.64px] bg-transparent border-none outline-none w-full placeholder:text-[#818380]"
                    onInput={(e) => setName(e.currentTarget.value)}
                    value={name}
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#333] text-[14px] md:text-[16px] tracking-[0.64px]">
                Email
              </p>
              <div className="bg-[#fefefe] relative rounded-[8px] w-full border border-[#ccc]">
                <div className="flex items-center px-3 md:px-[16px] py-2 md:py-[12px]">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#818380] text-[14px] md:text-[16px] tracking-[0.64px] bg-transparent border-none outline-none w-full placeholder:text-[#818380]"
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                 />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#333] text-[14px] md:text-[16px] tracking-[0.64px]">
                Message
              </p>
              <div className="bg-[#fefefe] relative rounded-[8px] w-full border border-[#ccc]">
                <div className="flex items-start px-3 md:px-[16px] py-2 md:py-[12px]">
                  <textarea
                    placeholder="Your message here..."
                    rows={6}
                    className="font-['Neue_Haas_Grotesk_Display_Pro:55_Roman',sans-serif] leading-[28px] md:leading-[32px] text-[#818380] text-[14px] md:text-[16px] tracking-[0.64px] bg-transparent border-none outline-none w-full resize-none placeholder:text-[#818380]"
                    onInput={(e) => setMessage(e.currentTarget.value)}
                    value={message}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="bg-[#8b9544] hover:bg-[#7a8239] transition-colors px-6 md:px-8 py-3 md:py-4 rounded-[8px] self-start" onClick={() => submit()} disabled={loading}>
              <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[28px] md:leading-[32px] text-[#f1eee7] text-[14px] md:text-[16px] tracking-[0.64px]">
                {loading ? "Sending..." : "Send Message"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
