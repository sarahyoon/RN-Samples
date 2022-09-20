import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Container, Content, Text, Thumbnail } from 'native-base';
import ImageComponent from '../components/ImageComponent';
import HeaderComponent from '../components/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
const my = require('../assets/my.png');
const data = require('../data.json');

export default function MyPage() {
  return (
    <Container>
      <HeaderComponent />
      <Content>
        <Thumbnail large source={my} style={styles.thumbnail} />
        <Text style={styles.myTitle}>스파르타코딩 클럽</Text>
        <Text style={{ alignSelf: 'center' }}>gunhee@spartacoding.co.kr</Text>
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={styles.logout}>로그아웃</Text>
        </TouchableOpacity>
        <Grid style={{ marginTop: 30 }}>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>작성한 글</Text>
            <Text style={styles.categoryContent}>7</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>작성한 댓글</Text>
            <Text style={styles.categoryContent}>21</Text>
          </Col>
          <Col size={3} style={{ alignItems: 'center' }}>
            <Text style={styles.category}>방문 횟수</Text>
            <Text style={styles.categoryContent}>321</Text>
          </Col>
        </Grid>
        <Grid style={styles.imageWrap}>
          {data.diary.map((content, i) => {
            return <ImageComponent image={content.image} key={i} />;
          })}
        </Grid>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  thumbnail: { alignSelf: 'center', marginTop: 30 },
  myTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  category: { fontWeight: '700' },
  categoryContent: { color: 'deeppink', fontWeight: '700' },
  imageWrap: { flexWrap: 'wrap', marginTop: 20 },
  logout: {
    alignSelf: 'center',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
});
