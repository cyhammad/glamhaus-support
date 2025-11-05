import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg p-4">
              <Image
                src="/logo.png"
                alt="Glamhaus Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Contact Support
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            We're here to help! Get in touch with our support team and we'll get back to you as soon as possible.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our support specialists are available to assist you with any questions or concerns you may have.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                <a href="mailto:support@glamhaus.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@glamhaus.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                <a href="tel:+18005551234" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +1 (800) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page