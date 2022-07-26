import { SectionProps } from 'interfaces/Section'

const Section = ({ backgroundColor, children }: SectionProps) => {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0">{children}</div>
    </section>
  )
}

export default Section
