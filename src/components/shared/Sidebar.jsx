import React from 'react';
import { Card, CardBlock, CardText } from 'reactstrap';

export default function Sidebar(props) {
  const { cryptodata } = props;
  console.log('crypto', cryptodata);
  
  return (
    <aside className="col-sm-12 col-md-4">
      <Card>
        <CardBlock>
          <CardText>
            Sidebar. {cryptodata.Id}
          </CardText>
        </CardBlock>
      </Card>
    </aside>
  );
}
