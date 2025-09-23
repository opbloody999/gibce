export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center" data-testid="loading-spinner">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-heading font-bold text-primary-foreground mb-2">GIBCE</h2>
        <p className="text-primary-foreground/80">Loading...</p>
      </div>
    </div>
  );
}