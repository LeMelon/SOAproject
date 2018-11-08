<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Cat types</h2>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th style="text-align:left">Breeds</th>
          </tr>
          <xsl:for-each select="petfinder/breeds/breed">
            <tr>
              <td><xsl:value-of select="current()"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
