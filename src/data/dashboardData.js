export const navLinks = [
  { label: 'Dashboard', href: '/', active: true },
  { label: 'My Customer', href: '#customers', active: false },
  { label: 'Commissions', href: '#commissions', active: false },
  { label: 'My Hierarchy', href: '#hierarchy', active: false },
  { label: 'Wallet', href: '#wallet', active: false },
  { label: 'Report', href: '#report', active: false, hasDropdown: true },
];

export const promoterProfile = {
  name: 'Jhon arias!',
  location: 'Chennai, Kerala',
  code: '#PRM-000006',
  role: 'Promoter',
  badges: ['KYC Verified', 'Bank Linked'],
  totalIncome: '₹1,810.00',
  earningsTrend: 'Direct earnings: +12.5%',
  avatar: "/images/user.png",
  initials: 'JA',
};

export const heroBalances = [
  { id: 'available', label: 'Available Balance', value: '₹1,810.00' },
  { id: 'pending', label: 'Pending Commission', value: '₹0' },
  { id: 'paid', label: 'Paid / Withdrawn', value: '₹500' },
];

export const featuredProperty = {
  name: 'EXPO Property',
  badge: 'Flagship Development',
  location: 'Sector 42, Metro Corridor, Malappuram, Kerala',
  image: '/images/featured-property.jpg',
  stats: [
    { label: 'Total Extent', value: '100+ Acres' },
    { label: 'Total Phases', value: '06' },
    { label: 'Plots Slot', value: '49/6' },
    { label: 'Slots Booked', value: '2' },
  ],
};

export const quickMetrics = [
  { id: 'customers', label: 'My Customers', value: '06', color: 'blue', icon: 'users' },
  { id: 'leads', label: 'Total Leads', value: '24', color: 'red', icon: 'filter' },
  { id: 'visits', label: 'Site Visits', value: '12', color: 'amber', icon: 'mapPin' },
  { id: 'bookings', label: 'Bookings', value: '06', color: 'purple', icon: 'calendar' },
  { id: 'commission', label: 'My Commission', value: '₹1,810', color: 'green', icon: 'trending' },
];

export const customerSummary = {
  rows: [
    { label: 'Total Onboarded', value: 6 },
    { label: 'Active', value: 6 },
    { label: 'Inactive', value: 0 },
    { label: 'Paid This Month', value: 0 },
    { label: 'Unpaid', value: 0 },
    { label: 'Overdue', value: 6 },
  ],
  totalValue: '₹3,120.00',
  chartSegments: [
    { label: 'Direct Bonus', percentage: 58, color: 'var(--color-forest)' },
    { label: 'Pending Payout', percentage: 42, color: 'var(--color-ochre)' },
  ],
  incomeBreakdown: [
    { label: 'Direct Bonus', percent: '58%', amount: '₹1,810.00' },
    { label: 'Level Income', percent: '—', amount: '₹0.00' },
    { label: 'Pending Payout', percent: '42%', amount: '₹1,310.00' },
  ],
  settlementNote:
    '₹1,310.00 pending payout — your first settlement is on the way.',
};

export const leadTrackerData = [
  { label: 'Total Leads', value: '24', tone: 'gold' },
  { label: 'New', value: '08', tone: 'default' },
  { label: 'Contacted', value: '06', tone: 'default' },
  { label: 'Follow-up', value: '11', tone: 'default' },
  { label: 'Site Visit', value: '05', tone: 'default' },
  { label: 'Converted', value: '05', tone: 'default' },
  { label: 'Lost', value: '0', tone: 'danger' },
];

export const highestEarners = {
  period: 'August 2026',
  list: [
    { rank: 1, name: 'Arjun Menon', code: '#PRM-000128', amount: '₹12,850', initials: 'AM', avatar: null },
    { rank: 2, name: 'Rahul Sharma', code: '#PRM-000117', amount: '₹10,420', initials: 'RS', avatar: null },
    { rank: 3, name: 'Sneha Nair', code: '#PRM-000135', amount: '₹9,875', initials: 'SN', avatar: null },
    { rank: 4, name: 'Vishnu Raj', code: '#PRM-000109', amount: '₹8,640', initials: 'VR', avatar: null },
  ],
};

export const paymentStatusData = {
  period: 'August 2026',
  headlinePercent: '70%',
  headlineLabel: 'Paid',
  segments: [
    { label: 'Paid', percentage: 70, displayPercent: '70%', amount: '₹12,45,000', color: 'var(--color-forest)' },
    { label: 'Unpaid', percentage: 15, displayPercent: '', amount: '₹3,20,000', color: 'var(--color-ochre)' },
    { label: 'Overdue', percentage: 15, displayPercent: '15%', amount: '₹1,85,000', color: 'var(--color-coral)' },
  ],
};

export const sidebarData = {
  rewards: [
    { id: 'amazon', title: 'Amazon Gift Card', milestone: '10 customers',  image: '/images/reward-amazon.png', },
    { id: 'voucher', title: '₹500 Shopping Voucher', milestone: '25 customers',  image: '/images/reward-voucher.png', },
    { id: 'travel', title: 'Premium Travel Kit', milestone: '50 customers',  image: '/images/reward-travel.png', },
    { id: 'earbuds', title: 'Wireless Earbuds', milestone: '75 customers',  image: '/images/reward-earbuds.png', },
  ],
  activities: [
    {
      id: 1,
      title: 'Payment Received',
      description: '₹25,000 received from Rahul Traders',
      time: '10 min ago',
      tone: 'green',
      icon: 'wallet',
    },
    {
      id: 2,
      title: 'New Customer Added',
      description: 'ABC Interiors added by Sales Team',
      time: '35 min ago',
      tone: 'green',
      icon: 'userPlus',
    },
    {
      id: 3,
      title: 'Payment Due',
      description: '₹18,500 payment due from City Furnitures',
      time: '1 hour ago',
      tone: 'amber',
      icon: 'receipt',
    },
    {
      id: 4,
      title: 'New Quotation Created',
      description: 'Quotation #QT-00124 created for Modern Homes',
      time: '2 hours ago',
      tone: 'blue',
      icon: 'fileText',
    },
  ],
  quickActions: [
    { id: 'withdraw', label: 'Request Withdrawal', icon: 'withdraw' },
    { id: 'commissions', label: 'View Commissions', icon: 'commissions' },
    { id: 'downline', label: 'My Downline', icon: 'downline' },
  ],
  overview: [
    { label: 'Total Earnings', value: '₹1,810.00', icon: 'earnings' },
    { label: 'Pending Commission', value: '₹0.00', icon: 'pending' },
    { label: 'Paid / Withdrawn', value: '₹500.00', icon: 'paid' },
    { label: 'Paid This Month', value: '0', icon: 'month' },
    { label: 'Total Downline', value: '0', icon: 'downline' },
    { label: 'Team Strength', value: '0', icon: 'team' },
  ],
};