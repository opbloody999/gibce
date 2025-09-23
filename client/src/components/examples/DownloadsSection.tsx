import DownloadsSection from '../DownloadsSection';

export default function DownloadsSectionExample() {
  const handleDownload = (itemId: string) => {
    console.log(`Downloading item: ${itemId}`);
  };

  return <DownloadsSection onDownload={handleDownload} />;
}