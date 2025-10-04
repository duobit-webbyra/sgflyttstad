export interface EmailTemplateProps {
  name: string;
  email: string;
  tel: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  tel,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: '#e0f3fe',
        color: '#1c2936',
        width: '700px',
        padding: '1rem 2rem',
        borderRadius: '1.5rem',
        fontFamily: '"Arial", "Helvetica", sans-serif',
        lineHeight: '1.5',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '36px', margin: '1rem 0' }}>
        Ny kundkontakt
      </h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Namn:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{name}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              E-mail:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{email}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Telefon:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{tel}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Meddelande:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{message}</td>
          </tr>
        </tbody>
      </table>
      <p style={{ padding: '2rem 0 0 0', textAlign: 'center' }}>
        Du kan svara på detta email för att nå kunden direkt.
      </p>
    </div>
  );
}

export interface QuotaTemplateProps {
  type: string;
  name: string;
  org: string;
  email: string;
  tel: string;
  date: string;
  from: string;
  fromAddress: string;
  fromArea: string;
  fromFloor: string;
  fromElevator: string;
  to: string;
  toAddress: string;
  toArea: string;
  toFloor: string;
  toElevator: string;
  helpOptions: string[];
  message: string;
}

export function QuotaTemplate({
  type,
  name,
  org,
  tel,
  email,
  date,
  from,
  fromAddress,
  fromArea,
  fromFloor,
  fromElevator,
  to,
  toAddress,
  toArea,
  toFloor,
  toElevator,
  helpOptions,
  message,
}: QuotaTemplateProps) {
  return (
    <div
      style={{
        backgroundColor: '#e0f3fe',
        color: '#1c2936',
        width: '700px',
        padding: '1rem 2rem',
        borderRadius: '1.5rem',
        fontFamily: '"Arial", "Helvetica", sans-serif',
        lineHeight: '1.5',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '36px', margin: '1rem 0' }}>
        Ny offertförfrågan
      </h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Kundtyp:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>
              {type === 'company' ? 'Företag' : 'Privatperson'}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Namn:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{name}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Organisationsnummer:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{org}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              E-mail:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{email}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Telefon:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{tel}</td>
          </tr>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Datum
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{date}</td>
          </tr>
          <div
            style={{
              padding: '1rem 0 1rem 0',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
              }}
            >
              Flyttar från:
            </h2>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',

                  fontSize: '20px',
                }}
              >
                Lokaltyp:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>{from}</td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Address:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {fromAddress}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Bostadsarea:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {fromArea}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Våning:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {fromFloor}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Hiss:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {fromElevator}
              </td>
            </tr>
          </div>
          <div
            style={{
              padding: '1rem 0 1rem 0',
            }}
          >
            <h2
              style={{
                fontSize: '24px',
              }}
            >
              Flyttar till:
            </h2>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Lokaltyp:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>{to}</td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Address:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {toAddress}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Bostadsarea:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>{toArea}</td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Våning:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>{toFloor}</td>
            </tr>

            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Hiss:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {toElevator}
              </td>
            </tr>
          </div>
          <div
            style={{
              padding: '1rem 0 1rem 0',
            }}
          >
            <tr>
              <td
                style={{
                  padding: '0.5rem',
                  fontWeight: 'bold',
                  verticalAlign: 'top',
                  fontSize: '20px',
                }}
              >
                Vill ha hjälp med:
              </td>
              <td style={{ padding: '0.5rem', fontSize: '20px' }}>
                {helpOptions?.map((option) => option).join(', ')}
              </td>
            </tr>
          </div>
          <tr>
            <td
              style={{
                padding: '0.5rem',
                fontWeight: 'bold',
                verticalAlign: 'top',
                fontSize: '20px',
              }}
            >
              Meddelande:
            </td>
            <td style={{ padding: '0.5rem', fontSize: '20px' }}>{message}</td>
          </tr>
        </tbody>
      </table>
      <p style={{ padding: '2rem 0 0 0', textAlign: 'center' }}>
        Du kan svara på detta email för att nå kunden direkt.
      </p>
    </div>
  );
}
