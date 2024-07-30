package com.Package;

public class Discount {
	
	private int id;
	protected int rate;
	protected String Dcode;
	private String date;
	private int packtype;
	
	public Discount(int id, int rate, String dcode, String date, int packtype) {
		super();
		this.id = id;
		this.rate = rate;
		Dcode = dcode;
		this.date = date;
		this.packtype = packtype;
	}
	public Discount(int rate, String dcode) {
		super();
	
		this.rate = rate;
		this.Dcode = dcode;
	
	}

	public int getId() {
		return id;
	}

	public int getRate() {
		return rate;
	}

	public String getDcode() {
		return Dcode;
	}

	public String getDate() {
		return date;
	}

	public int getPacktype() {
		return packtype;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public void setDcode(String dcode) {
		Dcode = dcode;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setPacktype(int packtype) {
		this.packtype = packtype;
	}
	
	
	
	

}
