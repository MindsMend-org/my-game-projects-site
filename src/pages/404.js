import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl" style={{textAlign: 'center'}}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">⚠️ CMS / Page Loading</h1>
            <p>
              If you are trying to reach the <strong>Admin Panel</strong>, the server might still be starting up.
            </p>
            <div style={{
              background: '#fff3cd', 
              color: '#856404', 
              padding: '20px', 
              borderRadius: '8px',
              border: '1px solid #ffeeba',
              margin: '20px 0'
            }}>
              <h2><strong>Action Required:</strong></h2>
              <p>Please wait 5 seconds for the terminal to finish, then <strong>Refresh (F5)</strong>.</p>
            </div>
            <a href="/my-game-projects-site/" className="button button--primary button--lg">
              Return Home
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}