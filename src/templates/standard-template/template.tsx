import React from 'react';
import { Page, Document, View, StyleSheet } from '@react-pdf/renderer';
import { type FormValues, ResumeProvider } from '../../resume-form';
import { Header, SideNav, Main } from './sections';

const styles = StyleSheet.create({
  document: {
    padding: '30pt 40pt',
  },
  main: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  leftSide: {
    flexBasis: '72%',
    marginRight: 24,
  },
  rightSide: {
    flexBasis: '28%',
  },
});

export function StandardTemplate({ data }: { data: FormValues | undefined }) {
  return (
    <ResumeProvider initialValue={data}>
      <Document>
        <Page size='A4'>
          <View style={styles.document}>
            <Header />
            <View style={styles.main}>
              <View style={styles.leftSide}>
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
                <Main />
              </View>
              <View style={styles.rightSide}>
                <SideNav />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </ResumeProvider>
  );
}
