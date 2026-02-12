'use client';

import { useState } from 'react';

export default function BookingForm({ roomName, price, onClose }) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkin: '',
        checkout: '',
        guests: 1,
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo-only — no actual submission
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="booking-confirmation" id="booking-confirmation">
                <div className="booking-confirmation__icon">✓</div>
                <h3 className="booking-confirmation__title">Thank You!</h3>
                <p className="booking-confirmation__text">
                    Your booking request for <strong>{roomName}</strong> has been received.
                    We&rsquo;ll get back to you within 24 hours to confirm your stay.
                </p>
                <p className="booking-confirmation__details">
                    {formData.name} &middot; {formData.checkin} to {formData.checkout} &middot; {formData.guests} guest{Number(formData.guests) !== 1 ? 's' : ''}
                </p>
                <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={onClose}
                    style={{ marginTop: 'var(--space-6)' }}
                >
                    Close
                </button>
            </div>
        );
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit} id="booking-form">
            <div className="booking-form__header">
                <p className="text-overline">Book Your Stay</p>
                <h3 className="booking-form__title">{roomName}</h3>
                <p className="booking-form__price">{price}</p>
            </div>

            <div className="booking-form__fields">
                <div className="booking-form__field">
                    <label htmlFor="booking-name">Full Name</label>
                    <input
                        type="text"
                        id="booking-name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="booking-form__field">
                    <label htmlFor="booking-email">Email</label>
                    <input
                        type="email"
                        id="booking-email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="booking-form__row">
                    <div className="booking-form__field">
                        <label htmlFor="booking-checkin">Check-in</label>
                        <input
                            type="date"
                            id="booking-checkin"
                            name="checkin"
                            value={formData.checkin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="booking-form__field">
                        <label htmlFor="booking-checkout">Check-out</label>
                        <input
                            type="date"
                            id="booking-checkout"
                            name="checkout"
                            value={formData.checkout}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="booking-form__field">
                    <label htmlFor="booking-guests">Number of Guests</label>
                    <select
                        id="booking-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                    >
                        {[1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                                {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="booking-form__actions">
                <button type="submit" className="btn btn-primary booking-form__submit" id="booking-submit">
                    Request Booking
                </button>
                <button type="button" className="btn btn-ghost" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </form>
    );
}
