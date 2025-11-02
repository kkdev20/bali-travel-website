'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const contactInfoKeys = [
  { icon: Phone, titleKey: 'contact.info.whatsapp', color: 'from-green-500 to-green-600' },
  { icon: Mail, titleKey: 'contact.info.email', color: 'from-blue-500 to-blue-600' },
  { icon: Instagram, titleKey: 'contact.info.instagram', color: 'from-pink-500 to-purple-600' },
  { icon: MapPin, titleKey: 'contact.info.location', color: 'from-orange-500 to-red-600' },
]

const contactValues = ['+62 812 3456 7890', 'info@balitravel.com', '@balitravel', 'Denpasar, Bali, Indonesia']
const contactHrefs = ['https://wa.me/6281234567890', 'mailto:info@balitravel.com', 'https://instagram.com/balitravel', 'https://maps.google.com/?q=Denpasar,Bali']

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    travelDates: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        travelDates: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding bg-light-bg-primary dark:bg-dark-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-light-brand-green to-light-brand-blue dark:from-dark-brand-gold dark:to-dark-brand-teal flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
                    {t('contact.form.thanks')}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('contact.form.name')}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.placeholder.name')}
                    />
                    <Input
                      label={t('contact.form.email')}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('contact.form.phone')}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('contact.form.placeholder.phone')}
                    />
                    <Input
                      label={t('contact.form.dates')}
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder={t('contact.form.placeholder.dates')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-light-text-primary dark:text-dark-text-primary">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.form.placeholder.message')}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-brand-green/20 dark:border-dark-brand-gold/20 focus:border-light-brand-green dark:focus:border-dark-brand-gold focus:outline-none focus:ring-2 focus:ring-light-brand-green/20 dark:focus:ring-dark-brand-gold/20 transition-colors text-light-text-primary dark:text-dark-text-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfoKeys.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.titleKey}
                  href={contactHrefs[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="block"
                >
                  <Card className="p-6 hover:shadow-xl transition-shadow">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1 text-light-text-primary dark:text-dark-text-primary">
                      {t(info.titleKey)}
                    </h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {contactValues[index]}
                    </p>
                  </Card>
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.223083668635!2d115.216977!3d-8.670458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e0e3a45%3A0x501e8f1fc2911c0!2sDenpasar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

