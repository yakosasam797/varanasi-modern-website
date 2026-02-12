'use client';

import React from 'react';

/**
 * ErrorBoundary — catches client-side rendering errors and recovers
 * by performing a full page reload rather than showing a blank screen.
 */
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error for debugging
        console.error('[ErrorBoundary] Caught rendering error:', error, errorInfo);

        // Perform a full page reload to recover cleanly.
        // The pages all work correctly on a fresh load, so this is a
        // reliable recovery strategy for transient client-side errors
        // (e.g., stale Lenis/GSAP state from navigation transitions).
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI shown briefly before reload kicks in
            return (
                <div
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-sans, sans-serif)',
                        color: 'var(--text-secondary, #5a4f45)',
                        background: 'var(--surface-primary, #fff)',
                    }}
                >
                    <p>Refreshing&hellip;</p>
                </div>
            );
        }

        return this.props.children;
    }
}
