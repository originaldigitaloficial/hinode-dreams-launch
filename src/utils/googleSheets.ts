
/**
 * Google Sheets API Integration
 * Integração com Google Sheets para cadastro de leads usando Service Account
 */

// Configurações da Service Account
const GOOGLE_SHEETS_CONFIG = {
  type: "service_account",
  project_id: "hinode-leads",
  private_key_id: "d32a74efa1a7f11acf1d8497d7e4d40cb603c3a9",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdLyRkYgXwkn/j\nqWgryDv0DQZNCu4j37S8HdTqE4Fh6Qje004dqkI2Wo+4Fy5vubDnyZg086OT+uyO\n1up+mvPMx7uPaT+c5JwgJAUBfX1vFN4bpm5deXJ27INQvN8iohxyHlqx5qEADSX8\neZVxd53R8nzSlN/Z2Ka/Augh/FmR7VkoffYq+RJclAD28Yhy/vA3AS63yGZFfU8B\nQaqj9y60gqTF0BA8dQv/xGtsNgH7k5Sk5spuQSmwfhtbwMtGAV9+0sypRvs4QYD2\ncM8SDiUHnJKYtLEMtPh4zd1eSrTGgQAJCvGfjCvxelWU2fbNc5p5WPQHOAH9nOul\nC/Igo5F7AgMBAAECggEADOeUaMtlanFUn5fGbiXDyk8Rb9zQXVCd8X3Pf6I3UpcD\nu+uEM8pJIlZAC2CX1uNbY0Q5Q0unZ9xHdJivatKE5pCVVPpSlyprqPXcFVm8pRSF\nAach03nHjHzxcPz4osrFZBca4hUpravmrPo8azLjWZu7ZLyFPkjbs73k2flyTxkY\n791RAJo1XEIgmHeW3dwy2viXT26mAWgbM3Zc8qJjAMuRwIwVDKo8woLj7bZnJibL\nGpMdWTRydGLvdPvfB+kZTyQU0ZBjF/SNsFWFFZjqqJElpSObJ7BkK94fyT4FOJSC\nVQbRewwjkEUWj1unC55rMTQAhks9PtDW/Nbx5i2AWQKBgQDOSkDC9s9JkinUNODO\nG8WfLv093m7ij+l4OrOPmAjPxUyLbLGGeCjLmqSUO1kEOqGmQ6EBYPNrDazeC8zI\n38UWmttlLQpTRSvo6bAUM7X6mNO4eX8OtoDxxZo1819v3E7l4Ab+euw1RRSa7m2P\nK+eIQV9f6b+z3rXO/850hk/z8wKBgQDDD50+uMe/xqgVFTmbOe+O+Kxz+etrTGwO\nv9HQri8ktmwNNbptR2OFd90KzzcEh/i/I9x47+jSUWQHYpaumVRTWLUOk5zCMm3Y\ntx/F+QMzbQ6kAr7EaceluKKyUdSHMBo4umkOJpHmDIAMauRJBlJXv/iLdyTrs1J1\nwLhsijO2WQKBgFyB5crIPSqD1igoUkt7HsMEomG1Nsp4uLzGrjENf54Unv/DDVT8\n22Z6gaVLe96uoEDcAP6KSH5QUp38cqf92PcLGKmlagTvdwJqkSBuFAQ9tmv6Z+Tk\nKKzC7SWWbszN4b+qF9jUrMoyoUvc8dqLWLe8gRWUz/fMPoGGK0IL3RzLAoGAS4BE\nth1hu7pSHu77QDkZn7ZjUfS/ieWnwcG/nc1+E/DEPAy630eNnwC5P1Dbk9Zpktp3\noRwDezzjwfQILQbOXABu/HhoacaJPCQNmVx8P7CLxTIG0xG6pEumNe10nOsiiyik\nN0T4nhniimvpdtaKksqMkrcIRG9BkLCK8gBAaekCgYBr4t5DyuzQt5PI/E6bTQ/+\nwPT7T6S55gHprd0m0v/5tsxfIRCDL8mpdFEjWMlzYj8/oApR7Tpn7ufqyyeFtWi2\nwxHU/yA08VtZobngEayFzEQys9KHVv84jbKayQ71O12HZW3hvi7z3sRxYr6jQDzD\n0Pl0jh2T6FQ/zoNIJ57/cg==\n-----END PRIVATE KEY-----\n",
  client_email: "hinode-leads@hinode-leads.iam.gserviceaccount.com",
  client_id: "103118508001846052873",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/hinode-leads%40hinode-leads.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// ID da planilha (configurável)
const DEFAULT_SPREADSHEET_ID = "1V7q1-JYXX77BrVAWKKzHpuhROvH3n8P1digIxv2lmp4";

// Interface para os dados do formulário
interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
}

/**
 * Gera um JWT (JSON Web Token) para autenticação com Google API
 * Necessário para autenticar usando Service Account
 */
async function generateJWT(): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: GOOGLE_SHEETS_CONFIG.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, // Token válido por 1 hora
    iat: now
  };

  // Codifica header e payload em base64
  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  // Importa a chave privada para assinar o token
  const privateKey = await window.crypto.subtle.importKey(
    'pkcs8',
    pemToArrayBuffer(GOOGLE_SHEETS_CONFIG.private_key),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256'
    },
    false,
    ['sign']
  );

  // Assina o token
  const signature = await window.crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(unsignedToken)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${unsignedToken}.${encodedSignature}`;
}

/**
 * Converte uma chave PEM em ArrayBuffer para uso com Web Crypto API
 */
function pemToArrayBuffer(pem: string): ArrayBuffer {
  const pemContents = pem
    .replace('-----BEGIN PRIVATE KEY-----', '')
    .replace('-----END PRIVATE KEY-----', '')
    .replace(/\s/g, '');
  
  const binaryString = atob(pemContents);
  const bytes = new Uint8Array(binaryString.length);
  
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  return bytes.buffer;
}

/**
 * Obtém um access token usando o JWT gerado
 * Necessário para fazer chamadas autenticadas à API do Google Sheets
 */
async function getAccessToken(): Promise<string> {
  const jwt = await generateJWT();
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    throw new Error('Falha na autenticação com Google API');
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Envia dados do formulário para Google Sheets
 * @param formData - Dados do formulário (nome, telefone, email, assunto)
 * @param spreadsheetId - ID da planilha (opcional, usa o padrão se não fornecido)
 * @returns Promise<boolean> - true se envio foi bem-sucedido
 */
export async function sendToGoogleSheets(
  formData: FormData, 
  spreadsheetId: string = DEFAULT_SPREADSHEET_ID
): Promise<boolean> {
  try {
    console.log('🚀 Iniciando envio para Google Sheets...', formData);
    
    // 1. Obter access token para autenticação
    const accessToken = await getAccessToken();
    console.log('✅ Token de acesso obtido com sucesso');

    // 2. Preparar dados para envio
    // Adiciona timestamp e organiza os dados em formato de linha
    const timestamp = new Date().toLocaleString('pt-BR');
    const rowData = [
      [timestamp, formData.name, formData.phone, formData.email, formData.subject]
    ];

    // 3. Configurar URL da API do Google Sheets
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append`;
    
    // 4. Fazer requisição para adicionar dados à planilha
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        range: 'A1', // Começa na célula A1
        majorDimension: 'ROWS', // Dados organizados em linhas
        values: rowData,
        valueInputOption: 'RAW' // Insere dados como texto bruto
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Erro na resposta da API:', errorData);
      throw new Error(`Erro ao enviar dados: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Dados enviados com sucesso para Google Sheets:', result);
    
    return true;

  } catch (error) {
    console.error('❌ Erro ao enviar dados para Google Sheets:', error);
    return false;
  }
}

/**
 * Função auxiliar para testar a conexão com Google Sheets
 * Útil para verificar se as credenciais estão funcionando
 */
export async function testGoogleSheetsConnection(
  spreadsheetId: string = DEFAULT_SPREADSHEET_ID
): Promise<boolean> {
  try {
    const accessToken = await getAccessToken();
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Erro ao testar conexão:', error);
    return false;
  }
}
