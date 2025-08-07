<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - MobiHeal</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 13px;
            color: #333;
            max-width: 75em;
            margin: 0 auto;
            padding: 2em;
          }
          table {
            border: none;
            border-collapse: collapse;
            width: 100%;
          }
          th {
            text-align: left;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            background-color: #f5f5f5;
          }
          td {
            padding: 10px;
            border-bottom: 1px solid #eee;
          }
          tr:hover {
            background-color: #f9f9f9;
          }
          a {
            color: #007cba;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .header {
            background-color: #007cba;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .header p {
            margin: 5px 0 0 0;
            opacity: 0.9;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>XML Sitemap</h1>
          <p>MobiHeal - Mobile Device Management Solutions</p>
        </div>
        <p>This XML Sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td>
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:changefreq"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:priority"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 