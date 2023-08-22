import { fetchArchiveData } from '../FetchData';

global.fetch = jest.fn();

test('fetchArchiveData returns the archived URL', async () => {
  const websiteUrl = 'http://youtube.com';
  const currentDate = new Date('2023-08-22');

  const mockedResponse = {
    archived_snapshots: {
      closest: {
        url: 'http://example.com/archive_snapshot'
      }
    }
  };

  // Mock the fetch response
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockedResponse)
  });

  const archivedUrl = await fetchArchiveData(websiteUrl, currentDate);

  expect(archivedUrl).toBe('http://example.com/archive_snapshot');
});

test('fetchArchiveData handles fetch error', async () => {
  const websiteUrl = 'http://example.com';
  const currentDate = new Date('2023-08-22');

  // Mock the fetch response with an error
  global.fetch.mockRejectedValue(new Error('Fetch error'));

  const archivedUrl = await fetchArchiveData(websiteUrl, currentDate);

  expect(archivedUrl).toBeNull();
});
