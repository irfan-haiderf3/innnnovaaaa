import SearchFilters from '../SearchFilters';

export default function SearchFiltersExample() {
  return (
    <div className="p-6">
      <SearchFilters
        onSearch={(filters) => console.log('Search clicked:', filters)}
        onReset={() => console.log('Reset clicked')}
      />
    </div>
  );
}
