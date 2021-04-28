import styled from 'styled-components';

const SideBarContentsWrapper = styled.div`
  height: calc(100% - 51px);
  width: 100%;
  over-flow: hidden;
`;
const SideBarSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SectionHeader = styled.div`
  height: 29px;
  width: 220px;
  padding-top: 6px;
  margin: 10px;
  font-weight: bold;
`;
const SectionContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const SectionCard = styled.div`
  border: 1px solid black;
  height: 42px;
  width: 100%;
`;
const SideBarContents = () => {
  return (
    <SideBarContentsWrapper>
      <SideBarSection>
        <SectionHeader>已追隨的頻道</SectionHeader>
        <SectionContents>
          <SectionCard>
            <CardAvatar></CardAvatar>
            <CardData>
              <DataTitle></DataTitle>
              <DataGame></DataGame>
            </CardData>
            <CardStatus></CardStatus>
          </SectionCard>
        </SectionContents>
      </SideBarSection>
    </SideBarContentsWrapper>
  );
};

export default SideBarContents;
