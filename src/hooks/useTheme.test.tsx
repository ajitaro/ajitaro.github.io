import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('useTheme', () => {
    beforeEach(() => {
        // Clear localStorage and document class
        localStorage.clear();
        document.documentElement.classList.remove('dark');

        // Mock matchMedia
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });

    it('should initialize with "light" theme by default', () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('light');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('should initialize with theme from localStorage', () => {
        localStorage.setItem('theme', 'dark');
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should initialize with "dark" theme if prefers-color-scheme is dark', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: query === '(prefers-color-scheme: dark)',
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });

        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('should toggle theme correctly', () => {
        const { result } = renderHook(() => useTheme());

        expect(result.current.theme).toBe('light');

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(localStorage.getItem('theme')).toBe('dark');

        act(() => {
            result.current.toggleTheme();
        });

        expect(result.current.theme).toBe('light');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(localStorage.getItem('theme')).toBe('light');
    });

    it('should persist theme change to localStorage', () => {
        const { result } = renderHook(() => useTheme());

        act(() => {
            result.current.toggleTheme();
        });

        expect(localStorage.getItem('theme')).toBe('dark');
    });
});
