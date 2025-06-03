
// Credenciais da Service Account para autenticação com Google Sheets API
const SERVICE_ACCOUNT_CREDENTIALS = {
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

/**
 * Função para criar um JWT (JSON Web Token) para autenticação com Google API
 */
async function createJWT(): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT"
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: SERVICE_ACCOUNT_CREDENTIALS.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now
  };

  // Codifica header e payload em Base64
  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  // Assina o token usando a chave privada
  const privateKey = SERVICE_ACCOUNT_CREDENTIALS.private_key;
  const key = await window.crypto.subtle.importKey(
    "pkcs8",
    str2ab(atob(privateKey.replace(/-----BEGIN PRIVATE KEY-----|\n|-----END PRIVATE KEY-----/g, ''))),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  const signature = await window.crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedToken)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${unsignedToken}.${encodedSignature}`;
}

/**
 * Função auxiliar para converter string em ArrayBuffer
 */
function str2ab(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

/**
 * Função para obter token de acesso usando o JWT
 */
async function getAccessToken(): Promise<string> {
  try {
    const jwt = await createJWT();

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
      const errorText = await response.text();
      throw new Error(`Erro na autenticação: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error(`Falha na autenticação: ${error}`);
  }
}

/**
 * Função principal para enviar dados do formulário para Google Sheets
 */
export async function sendToGoogleSheets(
  formData: { name: string; phone: string; email: string; subject: string },
  spreadsheetId: string,
  sheetName: string = 'Página1'
): Promise<boolean> {
  try {
    // Validar dados obrigatórios
    if (!formData.name || !formData.phone || !formData.email || !formData.subject) {
      throw new Error('Todos os campos são obrigatórios');
    }

    // Obter token de acesso
    const accessToken = await getAccessToken();
    
    // Preparar dados para envio
    const values = [[
      formData.name.toString(),
      formData.phone.toString(),
      formData.email.toString(),
      formData.subject.toString(),
      new Date().toLocaleString('pt-BR')
    ]];

    // Usar range simples para append
    const range = `${sheetName}!A:E`;
    
    // Fazer requisição para Google Sheets API
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          range: range,
          majorDimension: 'ROWS',
          values: values
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Erro ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    
    return true;
  } catch (error) {
    return false;
  }
}
