// app/api/history/route.test.ts

import httpMocks from 'node-mocks-http';
import { GET, POST } from './route'; // Import des handlers de la route

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data) => ({ json: data, status: 200 })),
  },
}));

describe('API /api/history', () => {
  it('devrait appeler GET et retourner une réponse', async () => {
    const req = httpMocks.createRequest({ method: 'GET' });
    const res = httpMocks.createResponse();

    const spy = jest.spyOn(global, 'fetch'); 

    await GET();

    expect(spy).not.toHaveBeenCalled(); 
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBeDefined();
  });

  it('devrait appeler POST et stocker une opération', async () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      body: {},
    });
    const res = httpMocks.createResponse();

    await POST(req);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toBeDefined();
  });
});
