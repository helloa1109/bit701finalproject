package data.service;

import data.dto.MemberDto;
import data.mapper.MemberMapper;


import java.util.List;

public interface MemberServiceInter {


    public void insertMember(MemberDto dto);
    public List<MemberDto> getAllMembers();
    public int getSearchId(String myid);
    public int getLogin(String myid, String mypass);
    public String getName(String myid);
    public void deleteMember(int num);
}
