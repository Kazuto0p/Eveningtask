const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDAwMDU0MDgsImV4cCI6MTc0MDAwOTAwOH0.TpznwJ63A3b5KpqO7ZR5dHBRDle9_41A-GhI4E6tz7o";

fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    },
    credentials: 'include' 
})
.then(response => response.json()) 
.then(data => console.log(data)) 
.catch(error => console.error('Error:', error));  
