'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';

const ROOMS = [
    {
        id: 'shared',
        name: 'Room with Shared Bathroom',
        price: '₹1,500 / night',
        capacity: '1–2 guests',
        description:
            'A comfortable, no-frills stay for solo travellers and couples. Shared facilities encourage connection with fellow guests in the heart of the farm.',
        img: '/images/site/vof-aerial.jpg',
        alt: 'Room with Shared Bathroom at Varanashi',
    },
    {
        id: 'mud-single',
        name: 'Mud Cottage — Single',
        price: '₹3,500 / night',
        capacity: '1 guest',
        description:
            'Handbuilt from the very clay that grows our crops. Cool in summer, warm in monsoon. A private haven for solo retreat-seekers.',
        img: '/images/site/cottage.jpg',
        alt: 'Mud Cottage single occupancy',
    },
    {
        id: 'mud-double',
        name: 'Mud Cottage — Double',
        price: '₹6,500 / night',
        capacity: '2 guests',
        description:
            'The same earthy elegance, sized for two. Share morning coffee on the porch as the farm wakes around you.',
        img: '/images/site/cottage.jpg',
        alt: 'Mud Cottage double occupancy',
    },
    {
        id: 'treehouse',
        name: 'Devadaru Tree House',
        price: '₹10,000 / night',
        capacity: 'Up to 4 guests',
        description:
            'No tree was pierced. Built from farm-grown teak, rosewood, acacia, and jackfruit. Ultimate privacy in the canopy — a testament to building with nature.',
        img: '/images/site/treehouse.jpg',
        alt: 'Devadaru Tree House at Varanashi',
    },
];

export default function RoomCards() {
    const [activeBooking, setActiveBooking] = useState(null);

    return (
        <div className="room-cards" id="room-cards">
            {ROOMS.map((room) => (
                <div className="room-card" key={room.id} id={`room-${room.id}`}>
                    <div className="room-card__img">
                        <Image
                            src={room.img}
                            alt={room.alt}
                            width={860}
                            height={500}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="room-card__content">
                        <div className="room-card__info">
                            <h3 className="room-card__name">{room.name}</h3>
                            <p className="room-card__desc">{room.description}</p>
                            <div className="room-card__meta">
                                <span className="room-card__price">{room.price}</span>
                                <span className="room-card__capacity">{room.capacity}</span>
                            </div>
                        </div>

                        {activeBooking === room.id ? (
                            <BookingForm
                                roomName={room.name}
                                price={room.price}
                                onClose={() => setActiveBooking(null)}
                            />
                        ) : (
                            <button
                                className="btn btn-primary room-card__book"
                                onClick={() => setActiveBooking(room.id)}
                                id={`book-${room.id}`}
                            >
                                Book This Room
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
