// Initialize Supabase Client
const supabaseUrl = 'https://edxataxseyjasyfqonqm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkeGF0YXhzZXlqYXN5ZnFvbnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NjQxNzEsImV4cCI6MjA1MjQ0MDE3MX0.ONElcNyD3qvJmKF4aSS5B5VDaWd8SqTnRKkUEvQ8EJc';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch Data from Supabase and Display in the Table
async function fetchData() {
    try {
        const { data, error } = await supabase
            .from('newsletter')
            .select('*');

        if (error) {
            console.error('Erro ao carregar os dados:', error);
            return;
        }

        const tableBody = document.querySelector("#data-table tbody");
        data.forEach(row => {
            const newRow = `
                <tr>
                    <td>${row.title}</td>
                    <td>${row.journal}</td>
                    <td>${row.impact_factor}</td>
                    <td>${row.summary}</td>
                    <td><a href="${row.link}" target="_blank">Acesse o artigo</a></td>
                    <td>${row.category}</td>
                    <td>${row.publication_date}</td>
                </tr>`;
            tableBody.innerHTML += newRow;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

window.addEventListener('load', fetchData);
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);
