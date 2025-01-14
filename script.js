// Initialize Supabase Client
const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseKey = 'YOUR-ANON-KEY';
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

fetchData();
