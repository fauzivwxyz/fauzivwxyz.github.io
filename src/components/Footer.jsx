export default function Footer({ fixed = false }) {
  return (
    <footer
      className={`w-full flex items-center justify-center gap-2 py-4 text-xs text-gray-500 dark:text-gray-400 ${
        fixed ? 'absolute bottom-0 left-0' : 'mt-auto'
      }`}
    >
      <span className="text-xs">&copy; 2025 Achmad Fauzi</span>
    </footer>
  );
}
