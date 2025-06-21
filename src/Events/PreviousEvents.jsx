import React from 'react'
import eventDetails from './eventDetails'

export default function PreviousEvents() {
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {eventDetails.map((event, index) => (
          <img 
            key={index}
            src={event.url1} 
            alt={event.title}
            className="w-full h-80 object-contain border rounded-xl shadow-md"
            onError={(e) => {
              e.target.src = event.url2;
            }}
          />
        ))}
      </div>
    </div>
  )
}
