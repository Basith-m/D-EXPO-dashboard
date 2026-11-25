'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import Avatar from '@/components/common/Avatar';
import { navLinks, promoterProfile } from '@/data/dashboardData';
import styles from './Navbar.module.css';

const reportSubLinks = [
  { label: 'Commission Report', href: '#commission-report' },
  { label: 'Sales Performance', href: '#sales-performance' },
  { label: 'Payout History', href: '#payout-history' },
];

export default function Navbar() {
  const [reportOpen, setReportOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setReportOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setReportOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link href="/" className={styles.logoLink} aria-label="D-EXPO Properties Home">
          <Image
            src="/images/logo.svg"
            alt="D-EXPO Properties"
            width={130}
            height={130}
            priority
            unoptimized
            className={styles.logoImage}
          />
        </Link>

        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li
              key={item.label}
              className={styles.navItem}
              ref={item.hasDropdown ? dropdownRef : null}
            >
              {item.hasDropdown ? (
                <>
                  <button
                    type="button"
                    className={styles.navLink}
                    aria-expanded={reportOpen}
                    aria-haspopup="menu"
                    onClick={() => setReportOpen((prev) => !prev)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={15}
                      strokeWidth={2}
                      className={`${styles.chevron} ${reportOpen ? styles.chevronOpen : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {reportOpen && (
                    <div className={styles.dropdownMenu} role="menu">
                      {reportSubLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          role="menuitem"
                          className={styles.dropdownItem}
                          onClick={() => setReportOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''
                    }`}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.rightGroup}>
          <div className={styles.searchBox}>
            <label htmlFor="dashboard-search" className="sr-only">
              Search anything here
            </label>
            <Search size={16} className={styles.searchIcon} aria-hidden="true" />
            <input
              id="dashboard-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything here"
              className={styles.searchInput}
            />
          </div>

          <button
            type="button"
            className={styles.iconButton}
            aria-label="Notifications"
          >
            {/* <Bell size={18} aria-hidden="true" /> */}
            <Image src="/icons/notification.svg" alt="" width={18} height={18} />
          </button>

          <button
            type="button"
            className={styles.profileTrigger}
            aria-label="Open profile menu"
          >
            <Avatar
              src={promoterProfile.avatar}
              alt={promoterProfile.name}
              initials={promoterProfile.initials}
              size={38}
            />
            <ChevronDown size={14} aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileSearch}>
            <Search size={16} className={styles.searchIcon} aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything here"
              className={styles.searchInput}
              aria-label="Search anything here"
            />
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}